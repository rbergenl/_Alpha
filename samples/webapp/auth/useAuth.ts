import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { useStore } from 'store';
import {
    userLoginSuccessAction,
    resetUserDataAction,
    fetchUserDataInitAction,
    fetchUserDataSuccessAction,
    fetchUserDataIFailureAction
} from 'store/user';

const useAuth = () => {

    const { dispatch } = useStore();
    const [ fetchingUserData, setFetchingUserData ] = useState(false);

    const handleSignout = async () => {
        try {
          await Auth.signOut();
          setFetchingUserData(false);
          dispatch(resetUserDataAction());
        } catch (error) {
          console.error('Error signing out user ', error);
        }
    }

    useEffect(() => {
        let isMounted = true

        const fetchUserData = async () => {
            if (isMounted) {
                dispatch(fetchUserDataInitAction());
            }
            try {
                if (isMounted) {
                    const data = await Auth.currentAuthenticatedUser()
                    if (data) {
                        dispatch(userLoginSuccessAction());
                        dispatch(fetchUserDataSuccessAction(data));
                    }
                }
            } catch (error) {
                if (isMounted) {
                    dispatch(fetchUserDataIFailureAction());
                }
            }
        }

        const onAuthEvent = (payload: any) => {
            switch (payload.event) {
                case 'signIn':
                    if (isMounted) {
                        // Analytics already handled by the Auth module!
                        setFetchingUserData(true)
                    }
                    break;
                default:
                    return;
            }
        }

        const listener = (data: any) => {
            const { payload } = data
            onAuthEvent(payload)
        };

        const HubListener = () => {
            Hub.listen('auth', listener);
        }

        HubListener()
        fetchUserData()

        return () => {
            Hub.remove('auth', listener)
            isMounted = false
        }
    }, [fetchingUserData, dispatch])

    return { handleSignout }
}

export default useAuth

# Add Publish:iOS
> Requires creditcard and Apple Developer Program enrollment.
- Build a standalone app IOS:
    - `expo build:ios`.

# Manually uploading your app
- In order to see your app on Testflight, you will first need to submit your .IPA file to Apple using Transporter (previously known as Application Loader), available on the App Store (link). In order to do this:
1. Make sure you have logged into iTunes connect at least once with your Apple ID and accepted the terms.
2. Download Transporter from the App Store.
3. Sign in with your Apple ID.
4. Add the IPA either by dragging it onto the Transporter window or by selecting it from the file dialog opened with + or Add App button.
5. Submit the IPA by clicking the Deliver button.
This process can take a few minutes. After this process is complete, you can check the status of your app submission to TestFlight in App Store Connect:
1. Login to https://appstoreconnect.apple.com with your Apple ID and regular password (NOT your app specific password)
2. Select 'My Apps' and you should see your app listed.
3. Click 'TestFlight' from the menu bar at the top.
4. This will show your current app builds that are available for testing.
5. In order to test the app on your device, you will need to install the TestFlight iOS app from the App Store, and sign in using your Apple ID.

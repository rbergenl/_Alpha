import { list } from '../mocks/monogdb';
import { Meal } from '../../../../types/__generated__/graphql';

export const resolvers = {
    Query: {
        listMeals: async () => {
            const meals = await list<Meal>('meal');
            return {
                items: meals
            }
        },
        // getMeal: (parent: any, args: any) => {
        //     const meal = getMealFromDB();
        //     return meal;
        // }
    },
    Mutation: {
        createMeal(parent: any, args: any): Meal {
            // TODO: add to database
            return args.input;
        }
    }
};

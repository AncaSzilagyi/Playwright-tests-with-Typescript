import { test as myTest } from '@playwright/test';

type elisa = {
    age: number,
    email: string
}

const myFixtureText = myTest.extend<elisa>({
    age: 27,
    email: "elisa1000@mailinator.com"
})

export const test = myFixtureText;

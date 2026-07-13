import {test} from '../utils/LoggedIn'

test('Contact Click',async ({loggedInPage})=>{
    await loggedInPage.click('text=Contact')
})
import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  email: string;
  password: string;
}

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Tiago Abreu',
      email: 'devtiagoabreu@gmail.com',
      avatar_url: 'https://avatars.githubusercontent.com/u/9002790?v=4'
    }
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Tiago Abreu',
      email: 'devtiagoabreu@gmail.com',
      avatar_url: 'https://avatars.githubusercontent.com/u/9002790?v=4'
    }
  }
}
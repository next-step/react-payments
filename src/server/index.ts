import axios, { AxiosRequestConfig } from 'axios'
import { SERVER_URL } from '../constants/config/server'

const DEFAULT_URL = SERVER_URL

function getAxiosInstance() {
  const instance = axios.create()
  instance.defaults.baseURL = DEFAULT_URL
  return instance
}

async function get<T>({
  path,
  config = {},
}: DefaultRequestParam): Promise<T | null> {
  const instance = getAxiosInstance()

  try {
    const response = await instance.get<T>(path, config)
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      console.log('Get Error With' + error.message + ' At ' + path)
    }

    return null
  }
}

async function post({
  path,
  body,
  config = {},
}: RequestWithBody): Promise<boolean> {
  const instance = getAxiosInstance()

  try {
    await instance.post(path, body, config)

    return true
  } catch (error) {
    if (error instanceof Error) {
      console.log('Post Error With' + error.message + ' At ' + path)
    }

    return false
  }
}

async function update({
  path,
  body,
  config = {},
}: RequestWithBody): Promise<boolean> {
  const instance = getAxiosInstance()

  try {
    await instance.put(path, body, config)

    return true
  } catch (error) {
    if (error instanceof Error) {
      console.log('Put Error With' + error.message + ' At ' + path)
    }

    return false
  }
}

async function drop({
  path,
  config = {},
}: DefaultRequestParam): Promise<boolean> {
  const instance = getAxiosInstance()

  try {
    await instance.delete(path, config)

    return true
  } catch (error) {
    if (error instanceof Error) {
      console.log('Delete Error With' + error.message + ' At ' + path)
    }

    return false
  }
}

type DefaultRequestParam = { path: string; config?: AxiosRequestConfig<any> }
interface RequestWithBody extends DefaultRequestParam {
  body: any
}
export { get, post, update, drop }

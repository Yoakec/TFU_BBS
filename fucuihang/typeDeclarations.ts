import type { Ref, ShallowRef } from 'vue'
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios'
export interface UseAxiosReturn<T> {
    /**
     * Axios Response
     */
    response: ShallowRef<AxiosResponse<T> | undefined>
    /**
     * Axios response data
     */
    data: Ref<T | undefined>
    /**
     * Indicates if the request has finished
     */
    isFinished: Ref<boolean>
    /**
     * Indicates if the request is currently loading
     */
    isLoading: Ref<boolean>
    /**
     * Indicates if the request was canceled
     */
    aborted: Ref<boolean>
    /**
     * Any errors that may have occurred
     */
    error: ShallowRef<AxiosError<T> | undefined>
    /**
     * Aborts the current request
     */
    abort: (message?: string | undefined) => void
    /**
     * isFinished alias
     */
    finished: Ref<boolean>
    /**
     * loading alias
     */
    loading: Ref<boolean>
    /**
     * abort alias
     */
    cancel: (message?: string | undefined) => void
    /**
     * abort aborted
     */
    canceled: Ref<boolean>
  }
  export interface StrictUseAxiosReturn<T> extends UseAxiosReturn<T> {
    /**
     * Manually call the axios request
     */
    execute: (url?: string, config?: AxiosRequestConfig) => void
  }
  export interface EasyUseAxiosReturn<T> extends UseAxiosReturn<T> {
    /**
     * Manually call the axios request
     */
    execute: (url: string, config?: AxiosRequestConfig) => void
  }
  export interface UseAxiosOptions {
    /**
     * Will automatically run axios request when `useAxios` is used
     *
     */
    immediate?: boolean
  }
  export declare function useAxios<T = any>(
    url: string,
    config?: AxiosRequestConfig,
    options?: UseAxiosOptions
  ): StrictUseAxiosReturn<T> & PromiseLike<StrictUseAxiosReturn<T>>
  export declare function useAxios<T = any>(
    url: string,
    instance?: AxiosInstance,
    options?: UseAxiosOptions
  ): StrictUseAxiosReturn<T> & PromiseLike<StrictUseAxiosReturn<T>>
  export declare function useAxios<T = any>(
    url: string,
    config: AxiosRequestConfig,
    instance: AxiosInstance,
    options?: UseAxiosOptions
  ): StrictUseAxiosReturn<T> & PromiseLike<StrictUseAxiosReturn<T>>
  export declare function useAxios<T = any>(
    config?: AxiosRequestConfig
  ): EasyUseAxiosReturn<T> & PromiseLike<EasyUseAxiosReturn<T>>
  export declare function useAxios<T = any>(
    instance?: AxiosInstance
  ): EasyUseAxiosReturn<T> & PromiseLike<EasyUseAxiosReturn<T>>
  export declare function useAxios<T = any>(
    config?: AxiosRequestConfig,
    instance?: AxiosInstance
  ): EasyUseAxiosReturn<T> & PromiseLike<EasyUseAxiosReturn<T>>
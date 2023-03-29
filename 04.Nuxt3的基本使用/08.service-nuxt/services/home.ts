import hyRequest from "./index"

import type { IResultData } from "./index"
export const fetchHomeInfoData = () => {
    return hyRequest.get<IResultData<any>>("/homeInfo")
}
import { configureStore } from '@reduxjs/toolkit' 
import resumeInfoSlice from '../lib/features/resumeInfo/ResumeInfoSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            resumeInfo: resumeInfoSlice
        },
    })
}
 
export type AppStore = ReturnType<typeof makeStore> 
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
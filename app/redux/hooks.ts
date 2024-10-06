import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';
import { TypedUseSelectorHook } from 'react-redux';

// Créez un hook typé pour `useDispatch`
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Créez un hook typé pour `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Créez un hook typé pour `useStore`
export const useAppStore = () => useStore<AppStore>();
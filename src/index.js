import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store, rootSaga } from './redux';
import { AppNavigation } from './navigation';

store.runSaga(rootSaga);

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <AppNavigation />
            </SafeAreaProvider>
        </Provider>
    );
}   
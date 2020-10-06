const mutations = {
    setAssetModalOpen: (_state: any, isOpen: boolean): void => {
        _state.modal.asset.isOpen = isOpen;
    },
    setAssetModalKey: (_state: any, key: string): void => {
        _state.modal.asset.key= key;
    },
    setAccountModal: (_state: any, isOpen: boolean): void => {
        _state.modal.account.isOpen = isOpen;
    },
    setConnectorModal: (_state: any, isOpen: boolean): void => {
        _state.modal.connector.isOpen = isOpen;
    },
};

const actions = {
    openAssetModal: ({ commit }: any, key: string): void => {
        commit('setAssetModalOpen', true);
        commit('setAssetModalKey', key);
    },
    closeAssetModal: ({ commit }: any): void => {
        commit('setAssetModalOpen', false);
    },
    openAccountModal: ({ commit }: any): void => {
        commit('setAccountModal', true);
    },
    closeAccountModal: ({ commit }: any): void => {
        commit('setAccountModal', false);
    },
    openConnectorModal: ({ commit }: any): void => {
        commit('setConnectorModal', true);
    },
    closeConnectorModal: ({ commit }: any): void => {
        commit('setConnectorModal', false);
    },
};

function state(): any {
    return {
        modal: {
            asset: {
                isOpen: false,
                key: '',
            },
            account: {
                isOpen: false,
            },
            connector: {
                isOpen: false,
            },
        },
    };
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
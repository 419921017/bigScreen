
const store = {
    state: {
        corpid: 'wxab99a1c4a40a40c5',   // 企业cropid
        corpsecret: 'TFf7YFy3cJ87KteteEg9o4WpQb9UuxbnQrMXrax3itI',  // 应用secret
        access_token: 'aEDFmLMDYsGuRMevNNNNt_fyboKH4U5K8pmh1ntGWklN92aW-OahvfYfT8aGje-VEj3vfiBYDaSXfrh6mbJ5hXXKl3GA0pBGLNaDYfHYCkyP4DxesfFbNQSLR5z16nz_ueo40t2Jyrd6vwEW0VgRwD8auDiqCpLF_rXB4Q6MZ3Ompzs5bbFoKmJSlUZjA-l1ZAuzSVV6_hKugQfT3DiKKsclD34kKa-JYU5AIsPysxnmw6p_akd1c954HioyzKTnImATt4KW9uM-_qgMPeuBhbJAMLyJa_dPSdnN3wCUU_0',
        jsapi_ticket: 'sM4AOVdWfPE4DxkXGEs8VPF9eF086KdJXaE2YZtv3Prej_sNbtu4nE5fK-hEWP0bucwPbAT0DYeG5T4n1jJO7g',
        isLoading: false,
        alertShow: false,
        direction: 'forward'
    },
    mutations: {
        UpdateCorpId(state, payload) {
            state.corpid = payload.corpid
        },
        UpdateCorpSecret(state, payload) {
            state.corpsecret = payload.corpsecret
        },
        UpdateAccessToken(state, payload) {
            state.access_token = payload.access_token
        },
        UpdateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        },
        UpdateAlertStatus(state, payload) {
            state.alertShow = payload.alertShow
        },
        updateDirection (state, payload) {
          state.direction = payload.direction
        }
    },
    actions: {
        
    }
}

export default store
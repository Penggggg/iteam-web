


/**路由配置 */
export let rootRoute = {

    /**1. Home页 */
    path: '/',
    getComponent: ( nextState, cb) => {
        System.import('./home.route')
            .then( module => {
                    cb( null, module.default )
            }).catch( err => showMessage( err, './home.route' ))
    }
    
}

function showMessage( err, fileName: string ): void {
    return console.error(`Error when download ${fileName}: ${err}`)
}
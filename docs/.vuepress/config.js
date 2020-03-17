module.exports = {
    title: "",
    base: "/micrositios-docs/",
    description: "Documentacion para Micrositios",
    themeConfig: {
        logo: 'https://dev.placetopay.com/web/wp-content/uploads/2020/03/p2p-logo-default.svg',
        sidebar: [

            ['', "Inicio"],
            {
                title: 'Administrador de recursos',
                colapsable: true,
                children: [
                    '/administrator_role/#entrada-y-salida-del-software',
                    '/administrator_role/resources.html',
                    '/administrator_role/settings.html'
                ]
            },
            {
                title: 'Usuario Final',
                colapsable: true,
                children: [
                    '/user_end/#entrada-y-salida-del-software.html',
                    '/user_end/actions.html',
                ]
            },{
                title: 'General',
                colapsable: true,
                children: [
                    '/general/',
                    '/general/icon',
                    '/general/filter',
                    '/general/security_measures',
                    '/general/general_problems_solutions',
                    '/general/service_management'
            
                ]
            }
        ]
    }
}

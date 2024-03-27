export  const AppData = {
    toursSecondaryMenu: [
        {
            id : 1,
            title: 'Dashboard',
            path: '/'
        },
        {
            id : 2,
            title: 'Shows',
            path: '/shows/'+ localStorage.getItem('initalTourId')
        },
        {
            id : 3,
            title: 'Inventory',
            path: '/inventory'
        },
        {
            id : 4,
            title: 'Accounting',
            path: '/accounting'
        },
        {
            id : 5,
            title: 'Merch IQ',
            path: '/merch-iq'
        },
    ],
}


export const TableHeaderData = {
    tours: [
        {
            id: 6,
            title : 'S.No'
        },
        {
            id: 7,
            title : 'Tour Name'
        },
        {
            id: 8,
            title : 'Show Date Range'
        },
        {
            id: 10,
            title : 'Vend Fee'
        },
        {
            id: 11,
            title : 'Tour Type'
        },
        {
            id: 12,
            title : 'Report Currency'
        },
    ]
}


export const showsMenu = [
    {
        id: 13,
        title: 'Dashboard',
        subMenu: [
            {
                id: 14,
                title: 'Tour Revenue',
                path: ''
            },
            {
                id: 15,
                title: 'Dollar per head',
                path: ''
            },
            
        ]
    },
    {
        id: 13,
        title: 'Shows',
        subMenu: [
            {
                id: 16,
                title: 'Total Shows',
                path: 'shows/'+localStorage.getItem('initalTourId')+'/'+'total'
            },
            {
                id: 17,
                title: 'Shows left',
                path: 'shows/'+localStorage.getItem('initalTourId')+'/'+'left'
            },
            {
                id: 18,
                title: 'Cancelled',
                path: 'shows/'+localStorage.getItem('initalTourId')+'/'+'cancelled'
            },
            {
                id: 19,
                title: 'Completed',
                path: 'shows/'+localStorage.getItem('initalTourId')+'/'+'completed'
            },
        ]
    },
    {
        id: 20,
        title: 'Inventory',
        subMenu: [
            {
                id: 21,
                title: 'Trailers',
                path: ''
            },
            {
                id: 22,
                title: 'View Shipments',
                path: ''
            },
            {
                id: 23,
                title: 'Reconcile',
                path: ''
            }
        ]
    },

    {
        id: 24,
        title: 'Accounting',
        subMenu: [
            {
                id: 25,
                title: 'Cash control',
                path: ''
            },
            {
                id: 26,
                title: 'Expenses',
                path: ''
            }
        ]
    },

    {
        id: 27,
        title: 'Merch IQ',
        subMenu: [
            {
                id: 28,
                title: 'Tour Forecast',
                path: ''
            },
            {
                id: 29,
                title: 'Tour planning',
                path: ''
            }
        ]
    },

]
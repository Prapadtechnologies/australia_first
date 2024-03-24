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
            path: '/shows/'+localStorage.getItem('initalTourId')
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
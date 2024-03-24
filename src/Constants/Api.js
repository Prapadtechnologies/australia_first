export const BASE_URL = "https://shows.prapadtechnologies.com";

export const ApiUrl = {
  login: "/auth/api/auth/login",
  logout: "/auth/api/auth/logout",
  searchVenue: "/shows/api/venue_address",
  addShow: "/shows/api/show_create",
  showsList: (showId,status) => { return `/shows/api/shows_list/${showId}?status=${status}`} ,
  toursList: (tourStatus) => {
    return `/tour/api/tour_list?status=${tourStatus}`;
  },
  addToursData:'/tour/api/add_tours_data',
  addTour: '/tour/api/tour_create'
};

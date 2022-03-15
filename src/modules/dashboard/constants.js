export const STATE_REDUCER_KEY = 'dashboard';

export const ROUTE_KEYS = {
    HOME: 'Home',
    DASHBOARDCOUNT: 'DashboardCount'
};

export const ROLE_BASED_VISIBILITY = [
    'success', 'totalIncidents',
    'actionTakenIncidentsCount',
    'totalUsers', 'activeUsersCount',
    'InactiveUsersCount', 'totalMemos',
    'totalPenalty', 'totalTechnicians',
    'faultyCameraCount', 'openedTicketsCount',
    'closedTicketsCount','role', 
];

export const LSI_ADMIN_ROLES = [
    'success', 'totalIncidents',
    'actionTakenIncidentsCount',
    'totalMemos', 'totalPenalty', 
    'totalTechnicians', 'faultyCameraCount', 
    'openedTicketsCount', 'closedTicketsCount',
    'role', 'totalCameras',
    'activeCameraCount', 'InactiveCameraCount'
]

export const SUPERVISOR_ROLES = [
    'success', 'totalIncidents',
    'actionTakenIncidentsCount',
    'totalMemos', 'totalPenalty', 
    'role', 'totalCameras',
    'activeCameraCount', 'InactiveCameraCount',
    'totalUsers', 'activeUsersCount',
    'InactiveUsersCount'
]
enum OS_PLATFORM {
  MAC_OS = 'OS_PLATFORM_MAC_OS',
  WINDOWS = 'OS_PLATFORM_WINDOWS',
  LINUX = 'OS_PLATFORM_LINUX',
  UKNOWN = 'OS_PLATFORM_UKNOWN',
}

enum EVENTS_FROM_MAIN_PROCESS {
  ON_SHOW_DIALOG = 'EVENTS_FROM_MAIN_PROCESS_ON_SHOW_DIALOG',
  ON_UPDATE_MAIN_VIEW = 'EVENTS_FROM_MAIN_PROCESS_ON_UPDATE_MAIN_VIEW',
}

enum NOTIFICATION_SERVICE {
  ON_SHOW_DIALOG = 'NOTIFICATION_SERVICE_ON_SHOW_DIALOG',
}

enum MAIN_VIEW_TAB {
  DOCTOR_LIST = 'MAIN_VIEW_TAB_DOCTOR_LIST',
  NURSE_INFORMATION = 'MAIN_VIEW_TAB_NURSE_INFORMATION',
  OTHER_STAFFS_INFORMATION = 'MAIN_VIEW_TAB_OTHER_STAFFS_INFORMATION',
  STAFF_MANAGEMENT = 'MAIN_VIEW_TAB_STAFF_MANAGEMENT',

  PATIENT_HISTORY = 'MAIN_VIEW_TAB_PATIENT_HISTORY',
  PATIENT_APPOINTMENT = 'MAIN_VIEW_TAB_PATIENT_APPOINTMENT',
  PATIENT_BILLING = 'MAIN_VIEW_TAB_PATIENT_BILLING',
  PATIENT_BOOKING = 'MAIN_VIEW_TAB_PATIENT_BOOKING',

  ADMIN_DOCTOR_DASHBOARD = 'MAIN_VIEW_TAB_ADMIN_DOCTOR_DASHBOARD',
  ADMIN_NURSE_DASHBOARD = 'MAIN_VIEW_TAB_ADMIN_NURSE_DASHBOARD',
  ADMIN_OTHER_STAFF_DASHBOARD = 'MAIN_VIEW_TAB_ADMIN_OTHER_STAFF_DASHBOARD',
}

export {
  OS_PLATFORM,
  EVENTS_FROM_MAIN_PROCESS,
  NOTIFICATION_SERVICE,
  MAIN_VIEW_TAB,
};

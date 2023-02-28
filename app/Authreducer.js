export const Inital_State = {
  userdeatils: false,
  notIntrested: false,
  job_provider_info: false,
  job_seeker_info: false,
  isrentalseeker: false,
  isrentalprovider: false,
};

export const AUthReducer = (state, action) => {
  switch (action.type) {
    case "User_details_given": {
      console.log("im here");
      return {
        ...state,
        userdeatils: true,
      };
    }
    case "Set_Job_seeker": {
      return {
        userdeatils: false,
        notIntrested: false,
        job_provider_info: false,
        job_seeker_info: true,
        isrentalseeker: false,
        isrentalprovider: false,
      };
    }

    case "Set_Job_Provider": {
      return {
        userdeatils: false,
        notIntrested: false,
        job_provider_info: true,
        job_seeker_info: false,
        isrentalseeker: false,
        isrentalprovider: false,
      };
    }
    case "Set_rental_Seeker": {
      return {
        userdeatils: false,
        notIntrested: false,
        job_provider_info: false,
        job_seeker_info: false,
        isrentalseeker: true,
        isrentalprovider: false,
      };
    }
    case "Set_rental_Provider": {
      return {
        userdeatils: false,
        notIntrested: false,
        job_provider_info: false,
        job_seeker_info: false,
        isrentalseeker: false,
        isrentalprovider: true,
      };
    }
    case "not_intrested": {
      return {
        ...state,
        signedIn: false,
        notIntrested: true,
      };
    }
    case "userdetails":
      return {
        ...state,
        userdeatils: true,
      };
    default:
      return state;
  }
};

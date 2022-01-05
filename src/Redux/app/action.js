


export const getDataRepositry = (data) => {
    return {
      type: "GET_DATA",
      payload: {
        data: data
      }
    };
  };
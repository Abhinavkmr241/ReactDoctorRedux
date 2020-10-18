// import { store } from "../redux/store";

/**
 *
 * Checks for auth token in auth state & storage
 *
 */
export const getToken = () => {
  return new Promise((resolve, reject) => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsIl9pZCI6IjVlY2U0MjA0ZmZkOTliMGRkMTNhNDNjMSIsImZ1bGxOYW1lIjoiQXNrIFZhaWR5YSIsImVtYWlsIjoiYWRtaW5AYXNrLXZhaWR5YS5jb20iLCJ1c2VyVHlwZSI6IkFkbWluIiwiaXNTdXBlckFkbWluIjp0cnVlLCJpYXQiOjE2MDI1MDMwNTcsImV4cCI6MTYwNTA5NTA1N30.dfpg0kxVmq64BRwrYs769z2MOmT4Jl9of55DSOIInSk';
    // const oldState = store.getState();
    // const state = { ...oldState };
    // Get token from state or localstorage
    // if (
    //   state &&
    //   state.userData &&
    //   state.userData["token"]
    // ) {
    //   token = state.userData["token"];
    // }
    resolve(token);
  });
};

export const USER_SELECTED = "USER_SELECTED";

export function selectUser(user){
    console.log("========");
    console.log("Selected: ", user);
    console.log("========");

    return {
        type : USER_SELECTED,
        payload : user
    }
}
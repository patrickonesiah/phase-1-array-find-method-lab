// code your solution here
const superbowlWin = (anArray) => {

    let found = anArray.find((element) => element.result === "W")
    return found ? found.year : found
}

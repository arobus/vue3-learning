const goalInput = document.querySelector("#goal")
const goalInputButton = document.querySelector("#addGoal")
const goalList = document.querySelector(".goals")

const addGoalToList = (goal) => {
    const goalListItem = document.createElement('li')
    goalListItem.textContent = goal
    goalList.appendChild(goalListItem)
}

goalInputButton.addEventListener("click", function(e) {
    const goal = goalInput.value
    if (typeof goal !== 'undefined' && goal !== '') {
        addGoalToList(goal)
        goalInput.value = ''
    } else {
        alert('Goal should not be empty! Everyone should have goals')
    }
})
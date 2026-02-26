const BuggyComponent = () => {
    throw new Error("Page crashed!");
    return (
        <div>Hello</div>
    )
}

export default BuggyComponent
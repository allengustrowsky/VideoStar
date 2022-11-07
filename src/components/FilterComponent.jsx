import exit from "../assets/exit.svg"

const FilterComponent = (props) => {
    const { filterData, setFilterData, setShowFilter } = props

    // Hide filtering display and reset filter parameters to default value (displays all videos)
    const handleClick = () => {
        setShowFilter(false)
        setFilterData({
            "title": "",
            "minLength": 0,
            "maxLength": 60,
            "free": false,
            "paid": false,
            "favorite": false,
            "purchased": false,
        })
    }

    const handleChange = (event) => {
        const { id, type, value, checked } = event.target

        setFilterData(prevFilterData => {
            return {
                ...prevFilterData,
                [id]: type === "checkbox" ? checked : value,
            }
        })
    }

    return (
        <>
            <input className="titleInput" type="text" value={filterData.title} id="title" placeholder="Title...." onChange={handleChange} />
            <input className="lengthInput" type="number" id="minLength" value={filterData.minLength} min="0" max="3599" onChange={handleChange} />
            <input className="lengthInput" type="number" id="maxLength" value={filterData.maxLength} min="0" max="3599" onChange={handleChange} />

            <span className="inputContainer">
                <input type="checkbox" id="free" onChange={handleChange} checked={filterData["free"]} />
                <label htmlFor="free">Free</label>
            </span>

            <span className="inputContainer">
                <input type="checkbox" id="paid" onChange={handleChange} checked={filterData["paid"]} />
                <label htmlFor="paid">Paid</label>
            </span>


            <span className="inputContainer">
                <input type="checkbox" id="favorite" onChange={handleChange} checked={filterData["favorite"]} />
                <label htmlFor="favorite">Favorite</label>
            </span>


            <span className="inputContainer">
                <input type="checkbox" id="purchased" onChange={handleChange} checked={filterData["purchased"]} />
                <label htmlFor="purchased">Purchased</label>
            </span>

            <img className="exitFilterIcon" src={exit} alt="click to hide filter options" onClick={handleClick} />

        </>
    )
}

export default FilterComponent
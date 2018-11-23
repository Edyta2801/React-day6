import React from 'react'


const Search = (props) => (
    <div>
        <div>
            <input
                type="text"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
            />
        </div>
        <div>
            <button
                onClick={props.onAllClickHandler}
            >
                ALL
            </button>
            <button
                onClick={props.onCompletedClickHandler}
            >
                COMPLETED
            </button>
            <button
                onClick={props.onCompletedClickHandler}
            >
                UNCOMPLETED
        </button>
        </div>
    </div>
)

export default Search
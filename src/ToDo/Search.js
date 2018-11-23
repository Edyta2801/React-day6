import React from 'react'


const Search = (props) => (
    <div>
        <div>
            <input
                type="text"
                value={props.filterText}
                onChange={props.onFilterTextChangeHandler}
                placeholder="Filter tasks"
            />
        </div>
        <div>
            <button
                disabled={props.chosenFilter==='ALL'}
                onClick={props.onAllClickHandler}
            >
                ALL
            </button>
            <button
                disabled={props.chosenFilter==='COMPLETED'}
                onClick={props.onCompletedClickHandler}
            >
                COMPLETED
            </button>
            <button
                disabled={props.chosenFilter==='UNCOMPLETED'}
                onClick={props.onUnCompletedClickHandler}
            >
                UNCOMPLETED
        </button>
        </div>
    </div>
)

export default Search
import React, { useState } from "react";
import Tile from '../components/tile'
import TextField from "../components/textField";
import { friendList } from "../mockData";
import '../assets/stylesheets/friendList.scss';
import Pagination from "../components/pagination";

const FriendList = () => {
    const [filteredList, setfilteredList] = useState(friendList);
    const [pageNo, setPageNo] = useState(0);
    const [sorted, setSorted] = useState(false);

    const handleChange = e => {
        const enteredName = e.target.value.trim();
        const res = [];
        friendList.forEach(obj => {
            if (obj.name.toLowerCase().includes(enteredName.toLowerCase())) {
                res.push(obj)
            }
        })
        setfilteredList(res);

    }

    const saveName = e => {
        let tmp = {};
        if (filteredList.length === 0 && e.keyCode === 13) {
            tmp = { name: e.target.value.trim(), favourite: false };
            friendList.push(tmp)
            setfilteredList([tmp]);
        }

    }

    const addToFavourites = (index) => {
        const dummyArr = [...filteredList];
        const correctIndex = ((pageNo * 4) + index);
        dummyArr[correctIndex].favourite = !dummyArr[correctIndex].favourite;
        setfilteredList(dummyArr);
    }

    const delName = index => {
        const dummyArr = [...filteredList];
        dummyArr.splice(((pageNo * 4) + index), 1);
        setfilteredList(dummyArr);
    }
    const nextBtnClick = () => {
        setPageNo(pageNo + 1);
    }
    const prevBtnClick = () => {
        setPageNo(pageNo - 1);
    }

    const sortFunc = () => {
        const favAry = filteredList.filter(val => val.favourite === true);
        const unFavAry = filteredList.filter(val => val.favourite === false);
        if (sorted === false) {
            setfilteredList([...favAry, ...unFavAry])
            setSorted(true);
        } else {
            setfilteredList([...unFavAry, ...favAry])
            setSorted(false);
        }

    }

    const chunkedList = () => filteredList.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / 4)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, []);

    return <React.Fragment>
        <div className='head'>Friend List</div>
        <TextField
            placeholder={"Enter a new friend's name or search a friend"}
            handleChange={handleChange}
            saveName={saveName}
        />
        {chunkedList().length > 0 ? chunkedList()[pageNo].map((val, index) => <Tile
            data={val}
            addToFavourites={addToFavourites}
            delName={delName}
            index={index}
        />) : null}
        <Pagination
            chunkedList={chunkedList()}
            pageNo={pageNo}
            nextBtnClick={nextBtnClick}
            prevBtnClick={prevBtnClick}
            sortFunc={sortFunc}
        />
    </React.Fragment>

}

export default FriendList
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";
import HobbyList from "../../components/Home/HobbyList";

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeID = useSelector((state) => state.hobby.activeID);
  // rerender when state of useSelector data is changed
  // if two useSelector on 1 page changed state, browser will trigger by 1 rerender

  // strict comparison === by default => shallow comparison (compare by key-value, not object address)
  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeID: state.hobby.activeID,
  // }), shallowEqual);

  const dispatch = useDispatch();

  const randomHobby = () => {
    const num = 1000 + Math.trunc(Math.random() * 9000);
    return {
      id: num,
      title: `Hobby number ${num}`,
    };
  };

  const handleRandomHobby = () => {
    const newHobby = randomHobby();
    dispatch(addNewHobby(newHobby));
  };

  const handleHobbyClick = (hobby) => {
    const newActiveID = hobby.id;
    dispatch(setActiveHobby(newActiveID));
  };

  return (
    <>
      <h1>REDUX HOOKS</h1>
      <button onClick={handleRandomHobby}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeID={activeID}
        onHobbyClick={handleHobbyClick}
      />
    </>
  );
}

export default HomePage;

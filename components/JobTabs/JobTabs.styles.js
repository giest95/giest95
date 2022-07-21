import styled from 'styled-components';

export const Wrapper = styled.section`

  .react-tabs {
    position: relative;
    display: flex;
    width: 70vw;
    height: 100%;
    color: black;
    background: lightgray;

    @media screen and (max-width: 720px) {
      width: 95vw;
      flex-flow: column;
    }
  }
  
  .react-tabs__tab-list {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0;
    padding: 0;
    color: white;
    background: lightgray;
    height: 100%;

    @media screen and (max-width: 720px) {
      flex-direction: row;
      /* overflow-x: scroll; */
      width: 300px;
      height: 65px;
    }
  }
  
  .react-tabs__tab {
    font-size: var(--fontBig);
    text-align: center;
    list-style: none;
    padding: 10px 5px;
    cursor: pointer;
    color: #bbb;
    border-left: 4px solid var(--orange);
    color: var(--orange);
    padding-left: 24px;
    transition: 0.3s;
    outline: 0;  //removes dotted border when tab is selected

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
      border-left: none;
      border-top: 4px solid var(--orange);
      padding-left: 10px;
      width: fit-content;
    }

    :hover {
      background: var(--orange);
      color: black;
    }
  }
  
  .react-tabs__tab--selected {
    background: var(--orange);
    border-color: #1c1d1f;
    border-left: 4px solid black; //might be able to use animate to have line scroll to tab
    color: black;
    padding-left: 21px;

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
      border-left: none;
      border-top: 4px solid black;
      padding-left: 10px;
    }

    :hover {
      color: white;
    }
  }
  
  .react-tabs__tab-panel {
    display: none;
    width: 85%;
    margin-left: 1vw;

    @media screen and (max-width: 720px) {
      margin-left: 5px;
      width: 95%;

      h3{
        line-height: 25px;
      }
    }
  }
  
  .react-tabs__tab-panel--selected {
    display: block;
  }
  
  .panel-content {
    text-align: center;
  }

  h3 {
    text-align: left;
    line-height: 10px;
  }

  p.time {
    text-align: left;
    line-height: 10px;
    color: var(--orange);
  }

  ul {
    text-align: left;
  }
`;

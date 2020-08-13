import React, { useState, useEffect } from 'react';
import PageDefault from '../../components/PageDefault';
import Main from '../../components/Main';
import ActionBar from '../../components/ActionBar';
import ToolList from '../../components/ToolList';
import toolsRepository from '../../repositories/toolsRepository';
import ModalAddNewTool from '../../components/ModalAddNewTool';
import Message from '../../components/Message';

const Home = () => {
  // tools list state
  const [tools, setTools] = useState([]);

  // search state
  const [search, setSearch] = useState({
    term: '',
    isSearchTagsOnly: false,
  });

  // message state
  const [isModalAddNewToolShown, showModalAddNewTool] = useState(false);
  const messageInitialValues = {
    isShown: false,
    text: '',
  };
  const [message, setMessage] = useState(messageInitialValues);

  useEffect(() => {
    if (search.isSearchTagsOnly) {
      toolsRepository.getByTag(search.term)
        .then((data) => {
          setTools(data);
        });
    } else {
      toolsRepository.getByTerm(search.term)
        .then((data) => {
          setTools(data);
        });
    }
  }, [search]);

  const handleSubmitSearch = (event) => {
    event.preventDefault();
  };

  const onChangeSearch = (event) => {
    setSearch({ ...search, term: event.target.value });
  };

  const onChangeSearchTagsOnly = (event) => {
    setSearch({ ...search, isSearchTagsOnly: event.target.checked });
  };

  const handleClickAdd = () => {
    setMessage(messageInitialValues);
    showModalAddNewTool(true);
  };

  const handleModalClose = (savedTool) => {
    if (savedTool) {
      setTools([
        ...tools,
        savedTool,
      ]);
      setMessage({
        isShown: true,
        text: 'Tool was saved',
      });
    }
    showModalAddNewTool(false);
  };

  const handleToolRemove = (idTool) => {
    toolsRepository.remove(idTool)
      .then(() => {
        setTools(tools.filter((tool) => tool.id !== idTool));
        setMessage({
          isShown: true,
          text: 'Tool was removed',
        });
      });
  };

  return (
    <>
      <PageDefault>
        <Main>
          {
            message.isShown
            && (
              <Message
                text={message.text}
                onClose={() => setMessage(messageInitialValues)}
              />
            )
          }

          <ActionBar
            search={search.term}
            onChangeSearch={onChangeSearch}
            isSearchTagsOnly={search.isSearchTagsOnly}
            onChangeSearchTagsOnly={onChangeSearchTagsOnly}
            onSubmitSearch={handleSubmitSearch}
            onClickAdd={handleClickAdd}
          />

          <ToolList
            tools={tools}
            onClickRemove={handleToolRemove}
          />
        </Main>
      </PageDefault>

      <ModalAddNewTool
        isShown={isModalAddNewToolShown}
        onClose={(savedTool) => handleModalClose(savedTool)}
      />
    </>
  );
};

export default Home;

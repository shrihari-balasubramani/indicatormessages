import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../Layouts/Dashboard';
import Spinner from '../../Components/Spinner';
import MessagesList from './MessagesList';
import Filters from './FiltersContainers';
import MessagesWithFilter from './MessagesWithFilter';

import {
  fetchMessages,
  setFilters
} from '../../core/store/actions/indicatorMessages';

const getMessages = state => state.messages;

const PageView = () => {
  const pageInfo = useSelector(getMessages);

  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();
  const dispatchSetFilters = appliedFilters => dispatch(setFilters(appliedFilters));

  useEffect(() => {
    dispatch(fetchMessages(pageNumber, pageInfo.filters));
  }, [pageInfo.filters, pageNumber]);
  return (
    <Layout>
      <MessagesWithFilter>
        <div className='small-portion'>
          <Filters filters={pageInfo.filters} setFilters={dispatchSetFilters} />
        </div>
        <div className='large-portion'>
          {pageInfo.isFetching ? (
            <div className='fullWidth'>
              <Spinner />
            </div>
          ) : (
            <MessagesList
              messages={pageInfo.messagesInfo?.data || []}
              meta={pageInfo.messagesInfo?.meta}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          )}
        </div>
      </MessagesWithFilter>
    </Layout>
  );
};

export default PageView;

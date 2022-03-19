import React, { memo, useContext } from 'react';
import NoData from '../../Components/NoData';
import resourceContext from '../../context/resources/resourceContext';
import ResourceCard from './ResourceCard';

const ResourceCards = memo(() => {
  const ResourceContext = useContext(resourceContext);
  const { category, searchText, resources } = ResourceContext;

  return (
    <div
      className='columns is-multiline is-centered fadeInUp'
      style={{ margin: 'auto', animationDelay: '0.85s' }}
    >
      {
        resources.length === 0 &&
          window.location.pathname === '/resources' ? (
          <NoData text={`There is no projects present for searched Keyword ${searchText}.
            Please try searching for something else.`} />
        ) : (
          resources.length === 0 &&
          window.location.pathname === '/bookmarked') ? (
          <NoData
            text={
              searchText === '' && category === 'all'
                ? 'You have not Bookmarked any Projects.'
                : category !== 'all'
                  ? `You have not Bookmarked any Projects of category "${category}".`
                  : `You have not Bookmarked any projects with search keyword "${searchText}"`
            }
          />
        ) : (
          resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        )}
    </div>
  );
});

export default ResourceCards;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side'>
      <div className='flex-row items-center space-x-4 card-body bg-transparent'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
          <h2 className='card-title'>{login}</h2>
          <div className='card-actions'>
            <Link
              className='text-base-content text-opacity-40'
              to={`/user/${login}`}
            >
              <button className='btn btn-sm'>View Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.defaultProps = {
  user: {},
};

UserItem.propTypes = {
  title: PropTypes.object.isRequired,
};
export default UserItem;

import Profile from './Profile/Profile';
import user from '../consigs/user.json';

import Statistics from './Statistics/Statistics';
import data from '../consigs/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../consigs/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../consigs/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

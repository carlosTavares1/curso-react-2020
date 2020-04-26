import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Carlos',
    avatar: 'https://scontent.fbnu2-1.fna.fbcdn.net/v/t1.0-9/s960x960/93853258_2886038171486630_34172164261281792_o.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_eui2=AeGvvDvmn2DrtsZfWwb6mTZlUhNfC-d6QAlSE18L53pACbefkwnJfR69yHKwpzOMU1kxQ1tsGeJpCngIg2nqQRqm&_nc_ohc=VGrRIlVSn60AX9kI8kR&_nc_ht=scontent.fbnu2-1.fna&_nc_tp=7&oh=9d480479dab825c086ede82c44d8c72b&oe=5EC51972',
    bio: 'Analista Desenvolvedor'
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;

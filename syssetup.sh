# system upgrade
sudo apt update
sudo apt -y upgrade

# nodejs, npm and postgres
sudo apt -y install nodejs
sudo apt -y install npm
sudo sh -c 'echo deb http://apt.postgresql.org/pub/repos/apt buster-pgdg main > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt -y install postgresql

# create postgres database
sudo -u postgres createuser snemtrix
sudo -u postgres psql -c "ALTER USER snemtrix WITH ENCRYPTED PASSWORD 'snx_3D5ru9HF'"
sudo -u postgres createdb -O snemtrix snemtrix_dev

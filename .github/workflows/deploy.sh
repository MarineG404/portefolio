set -e

echo "Starting deployment to production server..."

BUILD_DIR=dist
REMOTE_USER=$REMOTE_USER
REMOTE_HOST=$REMOTE_HOST
REMOTE_PATH=/var/www/portefolio

if [ ! -d "$BUILD_DIR" ]; then
  echo "❌ The build directory '$BUILD_DIR' does not exist. Please build the project before deploying."
  exit 1
fi

echo "📦 Sending files to the VPS..."
rsync -avz --delete \
  --chmod=Du=rwx,Dgo=rx,Fu=rw,Fgo=r \
  $BUILD_DIR/ \
  $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH


echo "✅ Deployment to production server completed successfully."

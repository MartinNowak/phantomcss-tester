FROM node:8-onbuild

# set PHANTOMJS_EXECUTABLE to use for casperjs
ENV PHANTOMJS_EXECUTABLE=/usr/src/app/node_modules/phantomjs-prebuilt/bin/phantomjs
ENTRYPOINT ["/usr/local/bin/npm", "run", "casperjs", "--"]
CMD []

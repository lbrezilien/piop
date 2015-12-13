/**
* Videos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },

    artist: {
      type: 'string'
    },

    genre: {
      type: 'string'
    },
    
    description: {
      type: 'string'
    },

    videoUrl: {
      type: 'string'
    },

    thumbNail: {
      type: 'string'
    }



  }
};

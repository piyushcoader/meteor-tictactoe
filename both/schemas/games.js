// playerInfo
    var playerInfo = new SimpleSchema({
        id: {
            type: String
        },

        name: {
            type: String
        },

        image: {
            type: String
        },

        ready: {
            type: Boolean
        },

        score: {
            type: Number
        },

        winner: {
            type: Boolean
        }
    });

// is
    var is = new SimpleSchema({
        playing: {
            type: Boolean
        },

        completed: {
            type: Boolean
        },

        isPublic: {
            type: Boolean
        }
    });

// chat
    var conversation = new SimpleSchema({
        id: {
            type: String
        },

        name: {
            type: String
        },

        text: {
            type: String
        }
    });

    var chat = new SimpleSchema({
        show: {
            type: Boolean
        },

        conversation: {
            type: [conversation]
        }
    });

// sets
    var set = new SimpleSchema({
        setNumber: {
            type: Number
        },

        matrix: {
            type: String
        },

        result: {
            type: String,
            optional: true
        }
    });

// status
    var status = new SimpleSchema({
        playerJoined: {
            type: Boolean
        }
    });

// Games
Games.attachSchema(new SimpleSchema({
    playerOne: {
        type: playerInfo
    },

    playerTwo: {
        type: playerInfo,
        optional: true
    },

    ai: {
        type: Boolean
    },

    sets: {
        type: [set],
        optional: true
    },

    chat: {
        type: chat,
        optional: true
    },

    status: {
        type: status
    },

    is: {
        type: is
    },

    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();
            }
        }
    },

    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    }
}));
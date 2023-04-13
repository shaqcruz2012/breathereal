CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    spotify_profile_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_kanye_west BOOLEAN NOT NULL
);

CREATE TABLE Post (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    content TEXT NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    location TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
);

CREATE TABLE Track (
    track_id INT PRIMARY KEY,
    track_name VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    album VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL    
);

-- Linking table for many-to-many relationship between Post and Track
CREATE TABLE PostTrack (
    post_id INT,
    track_id INT,
    PRIMARY KEY (post_id, track_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (track_id) REFERENCES Track(track_id)
);

I want to have an img to the track and link 

SC 4/10/2023 11:54 AM
"In this updated schema, the "Post" table remains the same, allowing each user to make multiple posts with different content. The "Track" table is introduced to store information about the tracks, such as track name, artist, album, and URL. The "PostTrack" table is a linking table that establishes a many-to-many relationship between the "Post" and "Track" tables. Each row in the "PostTrack" table represents a post-track association, with the "post_id" and "track_id" columns serving as foreign keys referencing the "Post" and "Track" tables, respectively.

 in the "PostTrack" table, the primary key is defined as a composite key consisting of both "post_id" and "track_id" columns. This means that the combination of these two columns must be unique in order to uniquely identify a row in the "PostTrack" table.

In this case, "post_id" and "track_id" are both foreign keys referencing the "Post" and "Track" tables, respectively. By defining them as a composite primary key, you are ensuring that each post-track association in the "PostTrack" table is unique, preventing duplicate entries where the same post and track combination is repeated
"
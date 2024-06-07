export interface Song {
  album_id: string;
  title: string;
  image: string;
  top_song_acount: number;
  urlsong: string;
  duration  :string;
  artist: Artist; // Ajout de la propriété artist
}
export interface Artist {
  artist_id:string
  createdAt :Date
  fullname :string
  label :string
  top_artist_count :number
  user_id :string
  // Ajoutez d'autres propriétés de l'artiste si nécessaire
}

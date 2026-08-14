const VideoCard = ({id, title, views}:{
  id: string;
  title: string;
  views: string;
}) => {
  function render() {
    return(
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        className="bg-white border-gray-300 border rounded-md shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all hover:-translate-y-1.5 hover:bg-gray-100"
      >
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={`Thumbnail for the video "${title}"`}
          loading="lazy"
          className="w-full aspect-video object-cover"
        />
        <div className="text-left p-4 flex flex-col grow">
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-[15px] text-gray-500 mt-auto">{views}</p>
        </div>
      </a>
    )
  }

  return render()
}

export default VideoCard

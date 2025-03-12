// Create enumeration named TypesOfMedia, which includes lowercase types video, audio

enum TypesOfMedia {
  VIDEO = 'video',
  AUDIO = 'audio',
}

// Create enumeration named FormatsOfMedia, which includes lowercase video formats: .mp4, .mov, .mkv, .flv, .webM

enum FormatsOfMedia {
  MP4 = '.mp4',
  MOV = '.mov',
  MKV = '.mkv',
  FLV = '.flv',
  WEBM = '.webM',
}

// Create interface description, in which:
// name - string
// type - one of the enums above
// format - one of the enums above
// subtitles - optional field of type string
// marks - optional field of unknown type

interface PlayMedia {
  name: string;
  type: TypesOfMedia;
  format: FormatsOfMedia;
  subtitles?: string;
  marks?: unknown;
}

function playMedia(
  { name, type, format, subtitles, marks }: PlayMedia = {
    name: 'example',
    type: TypesOfMedia.AUDIO,
    format: FormatsOfMedia.FLV,
  }
): string {
  let marksLog: unknown;

  // Create functionality where:
  // - If marks is an array, concatenate all elements into a single string and store in marksLog.
  // - If it's a string, store it in marksLog as is.
  // - If it's something else, set marksLog to "Unsupported type of marks."
  // - Avoid using "any"!

  if (Array.isArray(marks)) {
    marksLog = marks.reduce((res, item) => res + ', ' + item);
  } else if (typeof marks === 'string') {
    marksLog = marks;
  } else {
    marksLog = 'Unsupported type of marks';
  }

  console.log(`Media ${name}${format} is ${type}
    Marks: ${marksLog}
    Subtitles: ${subtitles ?? 'none'}`);
  // Remember what this operator ?? does?

  return 'Media started';
}

playMedia({
  name: 'WoW',
  format: FormatsOfMedia.FLV,
  type: TypesOfMedia.AUDIO,
  subtitles: 'hmhmhm hmhmhm doh',
  marks: ['4:30', '5:40'],
});

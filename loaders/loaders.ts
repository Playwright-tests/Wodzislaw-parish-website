import { JSONReader } from "../JSON-reader/JSONReader";
import { TestdataFileNames } from "../enums/testdataFileNames";
import { Link, PhotoGalleryData } from "../types/types";

export function getLinkTypes(key: string): Link[] {

    const temp = JSONReader.get(TestdataFileNames.LINKS);
    return temp[key];
}

export function getPhotoGalleryData(): PhotoGalleryData {

    const temp = JSONReader.get(TestdataFileNames.PHOTO_GALLERY);
    return temp['photoGallery'];
}
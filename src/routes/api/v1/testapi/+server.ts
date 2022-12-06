import { resdata } from "$lib/helpers/mresponse";
import type { RequestHandler } from "@sveltejs/kit";
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ url, request }) => {
    return resdata(request, 400)
}

 
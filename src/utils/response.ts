import { Response } from 'express';

export const ok = (res: Response, data: unknown, message: string) => {
    return res.status(200).json({
        success: true,
        message,
        data
    })
}

export const created = (res: Response, data: unknown, message: string) => {
    return res.status(201).json({
        success: true,
        message,
        data
    })
}

export const fail = (res: Response, message: string, detail: unknown) => {
    return res.status(400).json({
        success: false,
        message,
        detail
    })
}

export const badRequest = (res: Response, message: string, detail: unknown) => {
    return res.status(400).json ({
        success: false,
        message,
        detail
    });
}

export const notFound = (res: Response, message: string, detail?: unknown) => {
    return res.status(404).json ({
        success: false,
        message,
        detail
    });
}

export const internalError = (res: Response, message: string) => {
    return res.status(500).json({
        success: false,
        message
    })
}

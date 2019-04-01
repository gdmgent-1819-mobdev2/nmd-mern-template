/*
Import the external libraries:
- uuidv4
*/
import uuidv4 from 'uuid/v4';

/*
Import the internal libraries:
- * from mocks
- errorHandler
*/
import * as mockDb from '../mocks';
import { handleAPIError } from '../../../utilities';

class PostController {
    constructor() {

    }

    // List all the models
    index = (req, res, next) => {
        if(mockDb.posts === undefined || mockDb.posts === null) {
            return handleAPIError(404, `Type Post not found!`, next);
        }
        return res.status(200).json(mockDb.posts);
    }

    // Show specific model by id
    show  = (req, res, next) => { 
        const id = req.params.id;
        const item = mockDb.posts.find((obj) => {
            return obj.id === id;
        });
        if(item === undefined || item === null) {
            return handleAPIError(404, `Post with id: ${id} not found!`, next);
        }
        return res.status(200).json(item);
    }

    // ViewModel for Insert / Create
    create = (req, res, next) => {
        const vm = {
            "categories": []
        };
        return res.status(200).json(vm);
    }

    // Store / Create the new model
    store = (req, res, next) => {        
        let post = req.body;
        if(post === undefined || post === null) {
            return handleAPIError(400, `Could not create the Post, because the request is bad!`, next);
        }
        post.id = uuidv4();
        mockDb.posts.push(post);
        return res.status(201).json(post);
    }

    // ViewModel for Edit / Update
    edit = (req, res, next) => {
        const id = req.params.id;
        const item = mockDb.posts.find((obj) => {
            return obj.id === id;
        });
        if(item === undefined || item === null) {
            return handleAPIError(404, `Post with id: ${id} not found!`, next);
        }
        const vm = {
            "post": item,
            "categories": []
        }
        return res.status(200).json(vm);
    }

    // Update the model
    update = (req, res, next) => {  
        const id = req.params.id; 
        const idx = mockDb.posts.findIndex((obj) => {
            return obj.id === id;
        });
        if(idx === -1) {
            return handleAPIError(404, `Post with id: ${id} not found!`, next);
        }     
        const item = mockDb.posts[idx]
        let post = req.body;
        if(post === undefined || post === null || post == {}) {
            return handleAPIError(400, `Could not create the Post, because the request is bad!`, next);
        }
        post.id = item.id;
        mockDb.posts[idx] = post;
        return res.status(200).json(post);
    }

    // Delete / Destroy the model
    destroy = (req, res, next) => {  
        const id = req.params.id; 
        const idx = mockDb.posts.findIndex((obj) => {
            return obj.id === id;
        });
        if(idx === -1) {
            return handleAPIError(404, `Post with id: ${id} not found!`, next);
        }   
        mockDb.posts.splice(idx, 1);
        return res.status(200).json({ 'message': `Successful deleted the Post with id: ${id}!`});
    }
}
export default PostController;
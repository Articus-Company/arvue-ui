<?php

class arvueuiBackendAction extends waViewAction
{
    public function execute(): void
    {
        $this->setLayout(new arvueuiDefaultLayout());
    }
}
